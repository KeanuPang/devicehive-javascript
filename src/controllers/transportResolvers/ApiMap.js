const HttpApiResolver = require(`./HttpApiResolver`);
const WebSocketApiResolver = require(`./WebSocketApiResolver`);


const apiMap = new Map();


/**
 *
 */
class ApiMap {

    static get login() { return 'login'; };
    static get createUserToken() { return 'createUserToken'; };
    static get refreshToken() { return 'refreshToken'; };
    static get createPluginToken() { return 'createPluginToken'; };
    static get authenticatePlugin() { return 'authenticatePlugin'; };

    static get getServerInfo() { return 'getServerInfo'; };
    static get getCacheInfo() { return 'getCacheInfo'; };
    static get getClusterInfo() { return 'getClusterInfo'; };

    static get getConfiguration() { return 'getConfiguration'; };
    static get putConfiguration() { return 'putConfiguration'; };
    static get deleteConfiguration() { return 'deleteConfiguration'; };

    static get listDevice() { return 'listDevice'; };
    static get countDevice() { return 'countDevice'; };
    static get getDevice() { return 'getDevice'; };
    static get addDevice() { return 'addDevice'; };
    static get deleteDevice() { return 'deleteDevice'; };

    static get listDeviceType() { return 'listDeviceType'; };
    static get countDeviceType() { return 'countDeviceType'; };
    static get getDeviceType() { return 'getDeviceType'; };
    static get addDeviceType() { return 'addDeviceType'; };
    static get updateDeviceType() { return 'updateDeviceType'; };
    static get deleteDeviceType() { return 'deleteDeviceType'; };

    static get getCommand() { return 'getCommand'; };
    static get listCommand() { return 'listCommand'; };
    static get insertCommand() { return 'insertCommand'; };
    static get subscribeCommand() { return 'subscribeCommand'; };
    static get pollCommand() { return 'pollCommand'; };
    static get pollManyCommand() { return 'pollManyCommand'; };
    static get waitCommand() { return 'waitCommand'; };
    static get unsubscribeCommand() { return 'unsubscribeCommand'; };
    static get updateCommand() { return 'updateCommand'; };

    static get getNotification() { return 'getNotification'; };
    static get listNotification() { return 'listNotification'; };
    static get insertNotification() { return 'insertNotification'; };
    static get subscribeNotification() { return 'subscribeNotification'; };
    static get unsubscribeNotification() { return 'unsubscribeNotification'; };
    static get pollNotification() { return 'pollNotification'; };
    static get pollManyNotification() { return 'pollManyNotification'; };

    static get listNetwork() { return 'listNetwork'; };
    static get countNetwork() { return 'countNetwork'; };
    static get getNetwork() { return 'getNetwork'; };
    static get addNetwork() { return 'addNetwork'; };
    static get updateNetwork() { return 'updateNetwork'; };
    static get deleteNetwork() { return 'deleteNetwork'; };

    static get listUser() { return 'listUser'; };
    static get countUser() { return 'countUser'; };
    static get getUser() { return 'getUser'; };
    static get addUser() { return 'addUser'; };
    static get updateUser() { return 'updateUser'; };
    static get deleteUser() { return 'deleteUser'; };
    static get getCurrentUser() { return 'getCurrentUser'; };
    static get updateCurrentUser() { return 'updateCurrentUser'; };
    static get getUserDeviceTypes() { return 'getUserDeviceTypes'; };
    static get assignAllDeviceTypes() { return 'assignAllDeviceTypes'; };
    static get unassignAllDeviceTypes() { return 'unassignAllDeviceTypes'; };
    static get getUserDeviceType() { return 'getUserDeviceType'; };
    static get assignDeviceType() { return 'assignDeviceType'; };
    static get unassignDeviceType() { return 'unassignDeviceType'; };
    static get getUserNetwork() { return 'getUserNetwork'; };
    static get assignNetwork() { return 'assignNetwork'; };
    static get unassignNetwork() { return 'unassignNetwork'; };

    static get registerPlugin() { return 'registerPlugin'; };

    static get HTTP_API() { return `http`; }
    static get WS_API() { return `ws`; }

    static get MAIN_BASE() { return `main`; }
    static get AUTH_BASE() { return `auth`; }
    static get PLUGIN_BASE() { return `plugin`; }


    /**
     *
     * @param transport
     * @param key
     * @param parameters
     * @param body
     */
    static build(transport, key, parameters, body) {
        let transportAPI;

        switch (transport) {
            case ApiMap.HTTP_API:
                transportAPI = new HttpApiResolver(apiMap.get(key).http);
                break;
            case ApiMap.WS_API:
                transportAPI = new WebSocketApiResolver(apiMap.get(key).ws);
                break;
        }

        return transportAPI.build(parameters, body);
    }
}


apiMap.set(ApiMap.login, { http: { method: 'POST', uri: '/token', base: ApiMap.AUTH_BASE }, ws: { action: 'token' } });
apiMap.set(ApiMap.createUserToken, { http: { method: 'POST', uri: '/token/create', base: ApiMap.AUTH_BASE }, ws: { action: 'token/create', bodyKey: 'payload' } });
apiMap.set(ApiMap.refreshToken, { http: { method: 'POST', uri: '/token/refresh', base: ApiMap.AUTH_BASE }, ws: { action: 'token/refresh' } });
apiMap.set(ApiMap.createPluginToken, { http: { method: 'POST', uri: '/token/plugin/create', base: ApiMap.AUTH_BASE }, ws: {} }); //TODO WS
apiMap.set(ApiMap.authenticatePlugin, { http: { method: 'POST', uri: '/token/plugin/authenticate', base: ApiMap.AUTH_BASE }, ws: {} }); //TODO WS

apiMap.set(ApiMap.getServerInfo, { http: { method: 'GET', uri: '/info', base: ApiMap.MAIN_BASE }, ws: { action: 'server/info' } });
apiMap.set(ApiMap.getCacheInfo, { http: { method: 'GET', uri: '/info/cache', base: ApiMap.MAIN_BASE }, ws: { action: 'cache/info' } });
apiMap.set(ApiMap.getClusterInfo, { http: { method: 'GET', uri: '/info/config/cluster', base: ApiMap.MAIN_BASE }, ws: { action: 'cluster/info' } });

apiMap.set(ApiMap.getConfiguration, { http: { method: 'GET', uri: '/configuration/{name}', base: ApiMap.MAIN_BASE }, ws: { action: 'configuration/get' } });
apiMap.set(ApiMap.putConfiguration, { http: { method: 'PUT', uri: '/configuration/{name}', base: ApiMap.MAIN_BASE }, ws: { action: 'configuration/put' } });
apiMap.set(ApiMap.deleteConfiguration, { http: { method: 'DELETE', uri: '/configuration/{name}', base: ApiMap.MAIN_BASE }, ws: { action: 'configuration/delete' } });

apiMap.set(ApiMap.listDevice, { http: { method: 'GET', uri: '/device', base: ApiMap.MAIN_BASE}, ws: { action: 'device/list' } });
apiMap.set(ApiMap.countDevice, { http: { method: 'GET', uri: '/device/count', base: ApiMap.MAIN_BASE}, ws: { action: 'device/count' } });
apiMap.set(ApiMap.getDevice, { http: { method: 'GET', uri: '/device/{deviceId}', base: ApiMap.MAIN_BASE}, ws: { action: 'device/get' } });
apiMap.set(ApiMap.addDevice, { http: { method: 'PUT', uri: '/device/{deviceId}', base: ApiMap.MAIN_BASE}, ws: { action: 'device/save', bodyKey: 'device' } });
apiMap.set(ApiMap.deleteDevice, { http: { method: 'DELETE', uri: '/device/{deviceId}', base: ApiMap.MAIN_BASE}, ws: { action: 'device/delete' } });

apiMap.set(ApiMap.listDeviceType, { http: { method: 'GET', uri: '/devicetype', base: ApiMap.MAIN_BASE}, ws: { action: 'devicetype/list' } });
apiMap.set(ApiMap.countDeviceType, { http: { method: 'GET', uri: '/devicetype/count', base: ApiMap.MAIN_BASE}, ws: { action: 'devicetype/count' } });
apiMap.set(ApiMap.getDeviceType, { http: { method: 'GET', uri: '/devicetype/{deviceTypeId}', base: ApiMap.MAIN_BASE}, ws: { action: 'devicetype/get' } });
apiMap.set(ApiMap.addDeviceType, { http: { method: 'POST', uri: '/devicetype', base: ApiMap.MAIN_BASE}, ws: { action: 'devicetype/insert', bodyKey: 'deviceType' } });
apiMap.set(ApiMap.updateDeviceType, { http: { method: 'PUT', uri: '/devicetype/{deviceTypeId}', base: ApiMap.MAIN_BASE}, ws: { action: 'devicetype/update', bodyKey: 'deviceType' } });
apiMap.set(ApiMap.deleteDeviceType, { http: { method: 'DELETE', uri: '/devicetype/{deviceTypeId}', base: ApiMap.MAIN_BASE}, ws: { action: 'devicetype/delete' } });

apiMap.set(ApiMap.listCommand, { http: { method: 'GET ', uri: '/device/{deviceId}/command', base: ApiMap.MAIN_BASE}, ws: { action: 'command/list' } });
apiMap.set(ApiMap.getCommand, { http: { method: 'GET ', uri: '/device/{deviceId}/command/{commandId}', base: ApiMap.MAIN_BASE}, ws: { action: 'command/get' } });
apiMap.set(ApiMap.insertCommand, { http: { method: 'POST', uri: '/device/{deviceId}/command', base: ApiMap.MAIN_BASE}, ws: { action: 'command/insert', bodyKey: 'command' } });
apiMap.set(ApiMap.updateCommand, { http: { method: 'POST', uri: '/device/{deviceId}/command/{commandId}', base: ApiMap.MAIN_BASE}, ws: { action: 'command/update', bodyKey: 'command' } });
apiMap.set(ApiMap.pollCommand, { http: { method: 'GET', uri: '/device/{deviceId}/command/{commandId}/poll', base: ApiMap.MAIN_BASE} });
apiMap.set(ApiMap.pollManyCommand, { http: { method: 'GET', uri: '/device/command/poll', base: ApiMap.MAIN_BASE} });
apiMap.set(ApiMap.waitCommand, { http: { method: 'GET', uri: '/device/{deviceId}/command/{commandId}/poll', base: ApiMap.MAIN_BASE} });
apiMap.set(ApiMap.subscribeCommand, { ws: { action: 'command/subscribe' } }); 
apiMap.set(ApiMap.unsubscribeCommand, { ws: { action: 'command/unsubscribe' } }); 

apiMap.set(ApiMap.listNotification, { http: { method: 'GET ', uri: '/device/{deviceId}/notification', base: ApiMap.MAIN_BASE }, ws: { action: 'notification/list' } });
apiMap.set(ApiMap.getNotification, { http: { method: 'GET ', uri: '/device/{deviceId}/notification/{notificationId}', base: ApiMap.MAIN_BASE }, ws: { action: 'notification/get' } });
apiMap.set(ApiMap.insertNotification, { http: { method: 'POST', uri: '/device/{deviceId}/notification', base: ApiMap.MAIN_BASE }, ws: { action: 'notification/insert', bodyKey: 'notification' } });
apiMap.set(ApiMap.pollNotification, { http: { method: 'GET', uri: '/device/{deviceId}/notification/poll', base: ApiMap.MAIN_BASE} });
apiMap.set(ApiMap.pollManyNotification, { http: { method: 'GET', uri: '/device/notification/poll', base: ApiMap.MAIN_BASE} });
apiMap.set(ApiMap.subscribeNotification, { ws: { action: 'notification/subscribe' } }); 
apiMap.set(ApiMap.unsubscribeNotification, { ws: { action: 'notification/unsubscribe' } }); 

apiMap.set(ApiMap.listNetwork, { http: { method: 'GET', uri: '/network', base: ApiMap.MAIN_BASE }, ws: { action: 'network/list' } });
apiMap.set(ApiMap.countNetwork, { http: { method: 'GET', uri: '/network/count', base: ApiMap.MAIN_BASE }, ws: { action: 'network/count' } });
apiMap.set(ApiMap.getNetwork, { http: { method: 'GET', uri: '/network/{networkId}', base: ApiMap.MAIN_BASE }, ws: { action: 'network/get' } });
apiMap.set(ApiMap.addNetwork, { http: { method: 'POST', uri: '/network', base: ApiMap.MAIN_BASE }, ws: { action: 'network/insert', bodyKey: 'network' } });
apiMap.set(ApiMap.updateNetwork, { http: { method: 'PUT', uri: '/network/{networkId}', base: ApiMap.MAIN_BASE }, ws: { action: 'network/update', bodyKey: 'network' } });
apiMap.set(ApiMap.deleteNetwork, { http: { method: 'DELETE', uri: '/network/{networkId}', base: ApiMap.MAIN_BASE }, ws: { action: 'network/delete' } });

apiMap.set(ApiMap.listUser, { http: { method: 'GET', uri: '/user', base: ApiMap.MAIN_BASE}, ws: { action: 'user/list' } });
apiMap.set(ApiMap.countUser, { http: { method: 'GET', uri: '/user/count', base: ApiMap.MAIN_BASE}, ws: { action: 'user/count' } });
apiMap.set(ApiMap.getUser, { http: { method: 'GET', uri: '/user/{userId}', base: ApiMap.MAIN_BASE}, ws: { action: 'user/get' } });
apiMap.set(ApiMap.addUser, { http: { method: 'POST', uri: '/user', base: ApiMap.MAIN_BASE}, ws: { action: 'user/insert', bodyKey: 'user' } });
apiMap.set(ApiMap.updateUser, { http: { method: 'PUT', uri: '/user/{userId}', base: ApiMap.MAIN_BASE}, ws: { action: 'user/update', bodyKey: 'user' } });
apiMap.set(ApiMap.deleteUser, { http: { method: 'DELETE', uri: '/user/{userId}', base: ApiMap.MAIN_BASE}, ws: { action: 'user/delete' } });
apiMap.set(ApiMap.getCurrentUser, { http: { method: 'GET', uri: '/user/current', base: ApiMap.MAIN_BASE}, ws: { action: 'user/getCurrent' } });
apiMap.set(ApiMap.updateCurrentUser, { http: { method: 'PUT', uri: '/user/current', base: ApiMap.MAIN_BASE}, ws: { action: 'user/updateCurrent', bodyKey: 'user' } });
apiMap.set(ApiMap.getUserDeviceTypes, { http: { method: 'GET', uri: '/user/{userId}/devicetype', base: ApiMap.MAIN_BASE} }); // TODO WS
apiMap.set(ApiMap.unassignAllDeviceTypes, { http: { method: 'DELETE', uri: '/user/{userId}/devicetype/all', base: ApiMap.MAIN_BASE} }); // TODO WS
apiMap.set(ApiMap.assignAllDeviceTypes, { http: { method: 'PUT', uri: '/user/{userId}/devicetype/all', base: ApiMap.MAIN_BASE} }); // TODO WS
apiMap.set(ApiMap.unassignDeviceType, { http: { method: 'DELETE', uri: '/user/{userId}/devicetype/{deviceTypeId}', base: ApiMap.MAIN_BASE} }); // TODO WS
apiMap.set(ApiMap.getUserDeviceType, { http: { method: 'GET', uri: '/user/{userId}/devicetype/{deviceTypeId}', base: ApiMap.MAIN_BASE} }); // TODO WS
apiMap.set(ApiMap.assignDeviceType, { http: { method: 'PUT', uri: '/user/{userId}/devicetype/{deviceTypeId}', base: ApiMap.MAIN_BASE} }); // TODO WS
apiMap.set(ApiMap.getUserNetwork, { http: { method: 'GET', uri: '/user/{userId}/network/{networkId}', base: ApiMap.MAIN_BASE}, ws: { action: 'user/getNetwork' } });
apiMap.set(ApiMap.assignNetwork, { http: { method: 'PUT', uri: '/user/{userId}/network/{networkId}', base: ApiMap.MAIN_BASE}, ws: { action: 'user/assignNetwork' } });
apiMap.set(ApiMap.unassignNetwork, { http: { method: 'DELETE', uri: '/user/{userId}/network/{networkId}', base: ApiMap.MAIN_BASE}, ws: { action: 'user/unassignNetwork' } });

apiMap.set(ApiMap.registerPlugin, { http: { method: 'POST', uri: '/plugin/register', base: ApiMap.PLUGIN_BASE} }); // TODO WS


module.exports = ApiMap;