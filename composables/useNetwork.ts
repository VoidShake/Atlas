import type { ForceEdgeDatum, ForceNodeDatum } from 'v-network-graph/lib/force-layout'
import { Ref } from 'vue'
import { Entity } from '~~/graphql/generated'
import { Connection } from './pagination'

export type NodeConnection<T> = Pick<Connection<T>, 'nodes'>

export interface NodeEntity {
   id: Entity['id']
   __typename?: string
}

export interface Node extends ForceNodeDatum {
   type: string
   name?: string
}

export const nodeId = (node: NodeEntity) => `${node.__typename}#${node.id.toString()}`

export function toNode<T extends NodeEntity>(getName?: (node: T) => string) {
   return (node: T): Node => {
      const type = node.__typename ?? 'Unknown Type'
      const id = nodeId(node)
      const name = getName?.(node)
      return { id, type, name }
   }
}

function edgeFrom(source: NodeEntity, target: NodeEntity) {
   return {
      source: nodeId(source),
      target: nodeId(target),
      sourceNode: toNode()(source),
      targetNode: toNode()(target),
   }
}

export function createEdge<T extends NodeEntity>(connection: NodeConnection<T>, accessor: (node: T) => NodeEntity) {
   return connection.nodes.map(source => edgeFrom(source, accessor(source)))
}

export function createEdges<T extends NodeEntity>(
   connection: NodeConnection<T>,
   accessor: (node: T) => NodeConnection<NodeEntity>,
) {
   return connection.nodes.flatMap(source => accessor(source).nodes.map(target => edgeFrom(source, target)))
}

export const useNetwork = (
   nodesArray: Ref<Node[]>,
   edgesArray: Ref<ForceEdgeDatum[]>,
   showConnectionLess: Ref<boolean>,
) => {
   return computed(() => {
      const filteredNodes = showConnectionLess.value
         ? nodesArray.value
         : nodesArray.value.filter(({ id }) => edgesArray.value.some(edge => edge.source === id || edge.target === id))

      const nodes = Object.fromEntries(filteredNodes.map(({ id, ...node }) => [id, node]))
      const edges = Object.fromEntries(edgesArray.value.map(edge => [`${edge.source} -${edge.target} `, edge]))

      return { nodes, edges }
   })
}
