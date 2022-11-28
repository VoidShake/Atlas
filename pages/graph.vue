<template>
   <section>
      <v-network-graph v-if="network" class="graph" :nodes="network.nodes" :edges="network.edges" :configs="config">
         <template #override-node-label="{ scale, text, x, y, config, textAnchor, dominantBaseline }">
            <text
               x="0"
               y="0"
               :font-size="9 * scale"
               text-anchor="middle"
               dominant-baseline="central"
               :fill="config.color"
            >
               {{ text.type }}
            </text>
            <text
               :x="x"
               :y="y"
               :font-size="config.fontSize * scale"
               :text-anchor="textAnchor"
               :dominant-baseline="dominantBaseline"
               :fill="config.color"
            >
               {{ text.name }}
            </text>
         </template>
      </v-network-graph>
   </section>
</template>

<script lang="ts" setup>
import { defineConfigs, ShapeType } from 'v-network-graph'
import { ForceLayout, ForceNodeDatum, ForceEdgeDatum } from 'v-network-graph/lib/force-layout'
import { Connection } from '~~/composables/pagination'
import { Entity, RelationsGraphDocument } from '~~/graphql/generated'

type NodeType = 'Tale' | 'Place' | 'Area'

type NodeConnection<T> = Pick<Connection<T>, 'nodes'>

interface NodeEntity {
   id: Entity['id']
   __typename?: string
}

interface Node extends ForceNodeDatum {
   values: {
      type: NodeType
      name: string
   }
}

const colors: Record<NodeType, string> = {
   Tale: 'solid-400',
   Place: 'solid-500',
   Area: 'solid-600',
}

const shapes: Record<NodeType, ShapeType> = {
   Tale: 'rect',
   Place: 'circle',
   Area: 'circle',
}

const config = defineConfigs({
   node: {
      draggable: true,
      normal: {
         type: node => shapes[(node as Node).values.type],
         color: node => `var(--${colors[(node as Node).values.type]})`,
      },
      hover: {
         color: 'var(--accent-500)',
      },
      label: {
         color: 'white',
         text: 'values',
      },
   },
   edge: {
      normal: {
         color: '#FFF2',
      },
      hover: {
         color: 'var(--accent-500)',
      },
   },
   view: {
      layoutHandler: new ForceLayout({
         positionFixedByDrag: false,
         positionFixedByClickWithAltKey: true,
      }),
   },
})

const nodeId = (node: NodeEntity) => `${node.__typename}#${node.id.toString()}`

function toNode<T extends NodeEntity>(getName: (node: T) => string) {
   return (node: T): Node => {
      const type = (node.__typename as NodeType) ?? 'Unknown Type'
      const id = nodeId(node)
      const name = getName(node)
      return {
         id,
         values: { type, name },
      }
   }
}

function createEdges<T extends NodeEntity>(
   connection: NodeConnection<T>,
   accessor: (node: T) => NodeConnection<NodeEntity>,
) {
   return connection.nodes.flatMap(node =>
      accessor(node).nodes.map(it => ({ source: nodeId(node), target: nodeId(it) })),
   )
}

const { result } = useQuery(RelationsGraphDocument)

const network = computed(() => {
   if (!result.value) return null
   const { tales, areas, places } = result.value

   const nodesArray: Node[] = [
      ...areas.nodes.map(toNode(it => it.name)),
      ...places.nodes.map(toNode(it => it.name)),
      ...tales.nodes.map(toNode(it => it.title)),
   ]
   const edgesArray: ForceEdgeDatum[] = [...createEdges(tales, it => it.areas), ...createEdges(tales, it => it.places)]

   const nodes = Object.fromEntries(nodesArray.map(({ id, ...node }) => [id, node]))
   const edges = Object.fromEntries(edgesArray.map(edge => [`${edge.source} -${edge.target} `, edge]))

   return { nodes, edges }
})
</script>

<style scoped>
.graph {
   @apply w-full bg-solid-700;
   height: 1000px;
}

.graph:deep(text) {
   pointer-events: none;
}
</style>