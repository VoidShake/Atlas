const useDialog = () => useState<null | (() => void)>('dialog', () => null)

export function closeDialog() {
   const closeHandler = useDialog()
   closeHandler.value?.()
   closeHandler.value = null
}

export function openDialog(closeHandler: () => void) {
   closeDialog()
   const ref = useDialog()
   ref.value = closeHandler
}

export function useIsDialogOpen() {
   const ref = useDialog()
   return computed(() => !!ref.value)
}
