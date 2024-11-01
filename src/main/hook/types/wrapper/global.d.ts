type WrapperAsyncResponse<T = Record<string, unknown>, V = unknown> = Promise<
  {
    result: number
    errMsg?: string
    value?: V
  } & T
>
