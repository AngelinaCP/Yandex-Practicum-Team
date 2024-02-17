export const getYandexUrl = (code: string, uri: string) => {
  const rootUrl = `https://oauth.yandex.ru/authorize`

  const options = {
    response_type: 'code',
    client_id: code,
    redirect_uri: uri,
  }

  const qs = new URLSearchParams(options)

  return `${rootUrl}?${qs.toString()}`
}
