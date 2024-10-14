type ProfileData = {
   name: string
   properties: Array<{
      name: 'textures'
      value: string
   }>
}

type TextureData = {
   textures: Record<
      'SKIN' | 'CAPE',
      {
         url: string
      }
   >
}

export async function useSkin(getUUID: MaybeRef<string>) {
   const { data } = await useFetch<ProfileData>(() => `/skins/${unref(getUUID).replace(/-/g, '')}`)

   return computed(() => {
      const base = data.value?.properties.find(p => p.name === 'textures')?.value
      if (!base) return
      const json = import.meta.client ? atob(base) : Buffer.from(base, 'base64').toString()
      const { textures } = JSON.parse(json) as TextureData
      return textures.SKIN.url
   })
}
