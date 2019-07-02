import {Application, EggAppConfig} from 'egg';
import KeycloakConnect from '@anthinkingcoder/keycloak-koa-connect';

interface EggKeycloakConfig {
    base: KeycloakConnect.KeycloakOptions,
    middleware?: KeycloakConnect.MiddlewareOptions,
    kcConfig: KeycloakConnect.KeycloakConfig
}

declare module 'egg' {
    interface Application {
        keycloak: KeycloakConnect.Keycloak;
    }

    interface EggAppConfig {
        keycloak: EggKeycloakConfig
    }
}
