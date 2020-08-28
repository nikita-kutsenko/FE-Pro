// 1. Забираем json c https://raw.githubusercontent.com/brightestsirius/tesla/master/tesla.json.
// 2. Отрисовываем данные с полученного файла по примеру https://mc-astro.github.io/tesla-roadster-colors/.
// 3. При нажатии на цветной квадратик отображаем соответствующего цвета машину.

class Tesla {
    constructor( url ) {
        this.url = url;
    }

    async getTesla() {
        let response = await fetch ( this.url ),
            tesla = await response.json();

        return Promise.resolve(tesla);
    }
}

new Tesla( 'https://raw.githubusercontent.com/brightestsirius/tesla/master/tesla.json' ) 
    .getTesla()
    .then(
        tesla => {
            for ( car in tesla ) {
                let color = document.createElement('span');
                $(color).addClass(`dot ${car}`)
                        .appendTo($('#picker'));

                $(color).click(function() {
                    $('#img').attr('src', tesla[color.classList[1]]);
                    $('#textId').html(color.classList[1]);
                })
            }
        }
    )