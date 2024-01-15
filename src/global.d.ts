interface Window {
    api: {
        sendMessage: (channel: string, data: any) => Promise<any>
    }
}