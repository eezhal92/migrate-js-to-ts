# mybiz

Demo project for **Scalable Codebase with TypeScript** talk

## Requirements
- NodeJS 8.9.4
- Yarn 1.7.0

## Directory Structure

```sh
starter-app/
├── apps/api        # API server
└── apps/frontend   # Frontend
```

## Setup

Install dependencies
```sh
lerna bootstrap
```

Install dependency to specific app
```sh
lerna add <package-name> --scope @mybiz/frontend
```

or

```sh
lerna add <package-name> --scope @mybiz/api
```

Run the web api server and frontend simultanously

```sh
lerna run dev --stream or yarn dev
```

## License

[MIT](http://opensource.org/licenses/MIT)
