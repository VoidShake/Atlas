<template>
   <section>
      <div class="flex items-center gap-5">
         <FormKit
            v-model="shownTypes"
            type="multi"
            :options="possibleTypes"
            :label="$t('network.config.visible_nodes')"
         />
         <div>
            <FormKit v-model="showConnectionLess" type="checkbox" :label="$t('network.config.show_connection_less')" />
            <FormKit v-model="networkConfig.node.draggable" type="checkbox" :label="$t('network.config.draggable')" />
         </div>
      </div>
      <v-network-graph
         v-if="network"
         class="graph"
         :nodes="network.nodes"
         :edges="network.edges"
         :configs="networkConfig"
      >
         <template #override-node="{ scale, nodeId, x, y, config, textAnchor, dominantBaseline }">
            <NetworkNode
               :key="nodeId"
               :node="network.nodes[nodeId]"
               :x="x"
               :y="y"
               :scale="scale"
               :config="config"
               :text-anchor="textAnchor"
               :dominant-baseline="dominantBaseline"
            />
         </template>
      </v-network-graph>
   </section>
</template>

<script lang="ts" setup>
import { defineConfigs } from 'v-network-graph'
import { ForceLayout } from 'v-network-graph/lib/force-layout'
import { RelationsGraphDocument } from '~~/graphql/generated'

const { t } = useI18n()

const networkConfig = reactive(
   defineConfigs({
      node: {
         draggable: false,
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
   }),
)

const { result } = useQuery(RelationsGraphDocument)

const showConnectionLess = ref(false)

const possibleTypes = ['Species', 'Character', 'Area', 'Place', 'Tale'].map(it => ({
   value: it,
   label: t(`network.node_type.${it.toLowerCase()}`),
}))

const shownTypes = useState(() => possibleTypes.map(it => it.value))

function isShown({ type }: { type: string }) {
   return shownTypes.value.includes(type)
}

const nodesArray = computed(() =>
   result.value
      ? [
           ...result.value.areas.nodes.map(toNode(it => it.name)),
           ...result.value.places.nodes.map(toNode(it => it.name)),
           ...result.value.species.nodes.map(toNode(it => it.name)),
           ...result.value.characters.nodes.map(toNode(it => it.name)),
           ...result.value.tales.nodes.map(toNode(it => it.title)),
        ].filter(isShown)
      : [],
)

const edgesArray = computed(() =>
   result.value
      ? [
           ...createEdges(result.value.tales, it => it.areas),
           ...createEdges(result.value.tales, it => it.places),
           ...createEdges(result.value.tales, it => it.species),
           ...createEdges(result.value.tales, it => it.characters),
           ...createEdge(result.value.characters, it => ({ id: it.speciesId, __typename: 'Species' })),
        ].filter(it => isShown(it.sourceNode) && isShown(it.targetNode))
      : [],
)

const network = useNetwork(nodesArray, edgesArray, showConnectionLess)
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
