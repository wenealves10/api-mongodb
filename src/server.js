const {app, configs} = require('./app/app');

app.listen(configs.port, configs.host, () => {
    console.log(`Server running in the port: http://localhost:${configs.port}`);
})