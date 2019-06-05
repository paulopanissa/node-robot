import * as rl from 'readline-sync'

const start = () => {
    const content = {}

    content.termoDeBusca = perguntaRetornoTermoDeBusca()
    content.prefixo = perguntaRetornoPrefixo()

    function perguntaRetornoTermoDeBusca () {
        return rl.question('Digite o termo de busca: ')
    }

    function perguntaRetornoPrefixo () {
        let prefixos = ['Quem é', 'O que é', 'A história de']
        let selecioneIndicePrefixo = rl.keyInSelect(prefixos)
        let selecioneTextoPrefixo = prefixos[selecioneIndicePrefixo]
        return selecioneTextoPrefixo
    }

    console.log(content)
}

start()