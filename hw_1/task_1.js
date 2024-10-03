const musicCollection = [
    {
        title: "Pink Floyd",
        artist: "The Dark Side of the Moon",
        year: "1973"
    },
    {
        title: "Backstreet Boys",
        artist: "Millennium",
        year: "1999"
    },
    {
        title: "Селин Дион",
        artist: "Falling into You",
        year: "1996"
    },
    {
        title: "Nirvana",
        artist: "Nevermind",
        year: "1991"
    }
    ];
    
    musicCollection[Symbol.iterator] = function () {
        return {
            current: 0,
            to: this.length,
            next() {
                if (this.current < this.to) {
                    return { value: musicCollection[this.current++], done: false };
                } else {
                    return { done: true };
                }
            }
        }
    };
    
    for (let album of musicCollection) {
        console.log(`Название альбома: ${album.title}, Исполнитель: ${album.artist}, Год выпуска: ${album.year}`);
    }