// eslint-disable-next-line @typescript-eslint/no-unused-vars
type WrapperAsyncResponse<T extends Record<string, unknown> = Record<string, never>, V = unknown> = Promise<
  {
    result: number
    errMsg?: string
    value?: V
  } & T
>
