export function useCssHandles(handles: string[]) {
  return handles.reduce<Record<string, string>>((acc, handle) => {
    acc[handle] = handle

    return acc
  }, {})
}
