import { shallowMount } from "@vue/test-utils"
import PokemonOptions from "@/components/PokemonOptions"
import { pokemons } from "../mocks/pokemons.mock";

describe('PokemonOptions component', () => {
    
    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount( PokemonOptions, {
            props: {
                pokemons
            }
        })
    })

    test('debe de hacer match con el snapshot', () => {
        
        const wrapper = shallowMount( PokemonOptions, {
            props: {
                pokemons
            }
        })

        expect( wrapper.html() ).toMatchSnapshot()
    })

})
