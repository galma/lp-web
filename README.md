# LP-WEB

This is a README.md file for the project LP-WEB. It provides instructions on how to set up and run the project.

## Installation

To install the project dependencies, run the following command:

```
npm install
```

## Configuration

Configure the environment variable `REACT_APP_API_URL` with the API URL. It can be either a local instance or the live version at https://y1ibcj2a6l.execute-api.us-east-1.amazonaws.com/dev/v1. CORS has been enabled on the API to allow consumption from any domain. However, please note that in a production application, CORS should be strictly limited to specific domains. In this case, I have chosen to enable CORS for the purpose of allowing the API to be used from any domain without the need to manipulate the local DNS settings, such as modifying the host file of the operating system.

## Running the Project

To start the project, run the following command:

```
npm run start
```

## Live Version

The project is deployed on Vercel and can be accessed at the following URL: `https://lp-web-ten.vercel.app/`.

## Improvements

- Unit testing was not included due to time constraints.
- The naming of components and folder structure may need to be reviewed and adjusted for better consistency.
- Not all the possible typed errors have a typed message
