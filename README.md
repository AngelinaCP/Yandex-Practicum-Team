![Alt](https://repobeats.axiom.co/api/embed/1145203cf757e188dbb21cb1a2d845870701cfbc.svg "Repobeats analytics image")

## Production окружение в докере

Перед первым запуском выполните `node init.js`

`docker compose up` - запустит три сервиса
1. node, ваш сервер (server)
2. postgres, вашу базу данных (postgres)
3. pgadmin

Если вам понадобится только один сервис, просто уточните какой в команде

### Как запускать dev

1. [Инициализация проекта](#инициализация-проекта) (установит зависимости)
2. Выполните команду `yarn dev --scope=client` чтобы запустить только клиент
3. [Добавьте `client`  в `server`](#добавить-зависимость-client-в-server)
4. Выполните команду `yarn dev --scope=server` чтобы запустить только server


### Как собирать prod

1. [Инициализация проекта](#инициализация-проекта) (установит зависимости)
2. `yarn build --scope client` - собрать клиент
3.  [Добавить `client` в `server`](#добавить-зависимость-client-в-server)
4. `yarn build --scope server`

`yarn preview --scope client`
`yarn preview --scope server`
`docker compose up {sevice_name}`, например `docker compose up server`

### Инициализация проекта

1. Убедитесь что у вас установлен `node` и `docker`
2. Выполните команду `yarn bootstrap` - это обязательный шаг, без него ничего работать не будет :)

### Добавить зависимость `client` в `server`

Ссылку нужно делать, когда клиент собран (есть директории `dist`, `ssr-dist`)

1. `cd packages/client` - перейти в директорию с `client`
2. `yarn link` - создать ссылку
3. `cd ../server` - перейти в директорию с `server`
4. `yarn link client` - использовать ссылку на `client`
5. `cd ../../` - вернуться в корневую директорию


### Как добавить зависимости?
В этом проекте используется `monorepo` на основе [`lerna`](https://github.com/lerna/lerna)

Чтобы добавить зависимость для клиента 
```yarn lerna add {your_dep} --scope client```

Для сервера
```yarn lerna add {your_dep} --scope server```

И для клиента и для сервера
```yarn lerna add {your_dep}```


Если вы хотите добавить dev зависимость, проделайте то же самое, но с флагом `dev`
```yarn lerna add {your_dep} --dev --scope server```


### Тесты

Для клиента используется [`react-testing-library`](https://testing-library.com/docs/react-testing-library/intro/)

```yarn test```

### Линтинг

```yarn lint```

### Форматирование prettier

```yarn format```
