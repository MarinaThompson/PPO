// Interface 

export interface SoundBoardMap {
    button: ButtonMap;
    soundPath: string;

}

interface ButtonMap {
    id: string;
    name: string;
    color: string;
}

//Mocks 

export const SoundboardMock = [
    {
        button: {
            id: '01',
            name: 'Reproduzir Áudio',
            color: '#fff'
        },
        soundPath: 'audios/audioteste.mp3'
    }
]

