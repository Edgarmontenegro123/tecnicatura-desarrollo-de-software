/*export type RootTabParamList = {
    Inicio: undefined;
    Perfil: undefined;
    Configuracion: undefined;
};*/

export type RootStackParamList = {
    Inicio: undefined;
    Perfil: undefined;
    Configuracion: undefined;
    AcercaDe: { appName: string; version: string };
    Detalle: {productId: number, userName: string}
};

