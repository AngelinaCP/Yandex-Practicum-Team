declare global {
  interface TypedRequestBody<T> extends Express.Request {
    body: T
  }

  interface TypedRequest<TBody, TParams> extends Express.Request {
    body: TBody
    params: TParams
  }
}

export {}
