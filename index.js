let fruits = [
    {
        id: 1,
        title: 'Apples',
        price: 20,
        img: "https://e1.edimdoma.ru/data/ingredients/0000/2374/2374-ed4_wide.jpg?1487746348"
    },
    {id: 2, title: 'Oranges', price: 30, img: "https://klike.net/uploads/posts/2019-11/1574072281_2.jpg"},
    {
        id: 3,
        title: 'Mango',
        price: 40,
        img: "data:image/jpeg;base64,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"
    }
]

const toHTML = fruit => `
    <div className="col">
        <div className="card">
            <img className="card-img-top" style="height:300px"
                 src="${fruit.img}" alt="${fruit.title}">
                <div className="card-body">
                    <h5 className="card-title">${fruit.title}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                        the
                        card's content.</p>
                    <a href="#" className="btn btn-primary" data-btn="price" data-id="${fruit.id}">посмотреть цену</a>
                    <a href="#" className="btn btn-danger" data-btn = "remove" data-id="${fruit.id}">удалить</a>
                </div>
        </div>
    </div>
    `


function render() {
    const html = fruits.map(toHTML).join('')
    document.querySelector('#fruits').innerHTML = html
}

render()

const priceModal = $.modal(
    {
        title: 'Цена на Товар',
        closable: true,
        width: '400px',
        footerButtons: [
            {
                text: 'Close', type: 'primary', handler() {
                    priceModal.close()
                }
            }
        ]
    })


document.addEventListener('click', event => {
    event.preventDefault()
    const btnType = event.target.dataset.btn
    const id = +event.target.dataset.id
    const fruit = fruits.find(f => f.id === id)

    if (btnType === 'price') {
        priceModal.setContent(`
        <p> Цена на ${fruit.title}: <strong>${fruit.price}$</strong> </p>
        `)
        priceModal.open()
    } else if (btnType === 'remove') {
        $.confirm({
            title: 'Вы уверены?',
            content: `<p>Вы удаляете фрукт: <strong>${fruit.title}</strong> </p>`
        }).then(() => {
            fruits = fruits.filter(f => f.id !== id)
            render()
        }).catch(() => {
            console.log('Cancel')
        })
    }
})
