export interface DialogOptions {
  title?: string;
  buttons?: Array<{
    text: string;
    click: () => unknown | Promise<unknown>;
  }>;
}

export interface DialogContext {
  options: DialogOptions;
  x: number;
  y: number;
}

const useDialog = () => useState<DialogContext | null>("dialog", () => null);

export function openDialog(e: MouseEvent, options: DialogOptions) {
  const dialog = useDialog();
  dialog.value = {
    x: e.clientX,
    y: e.clientY,
    options,
  };
}

export default useDialog;
