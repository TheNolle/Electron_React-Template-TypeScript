import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('api', {
    sendMessage: async (channel: string, data: any) => {
        const validChannels: string[] = ['toMain']
        if (validChannels.includes(channel)) {
            const result: any = await ipcRenderer.invoke(channel, data)
            return result
        }
    }
})