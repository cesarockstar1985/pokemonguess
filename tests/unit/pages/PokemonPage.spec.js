import { shallowMount, mount } from "@vue/test-utils";
import PokemonPage from "@/pages/PokemonPage";
import PokemonOptions from "@/components/PokemonPicture";
import { pokemons } from "../mocks/pokemons.mock";

describe('PokemonPage component', () => {
  
    let wrapper
    let mixPokemonArraySpy

    beforeEach(() => {
        mixPokemonArraySpy = jest.spyOn( PokemonPage.methods, 'mixPokemonArray' )
        wrapper = shallowMount( PokemonPage )
    }) 

    test('debe hacer match con el snapshot', () => {
        expect( wrapper.html() ).toMatchSnapshot()
    })

    test('debe de llamar el mixPokemonArray al montar', () => {

        expect( mixPokemonArraySpy ).toHaveBeenCalled()

    })

    test('debe de hacer match con el snapshot cuando cargan los pokemons', () => {
      
        const wrapper = shallowMount( PokemonPage, {
            data() {
                return {
                    pokemonArr: pokemons,
                    pokemon: pokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                }
            }
        })

        expect( wrapper.html() ).toMatchSnapshot()

    })

    test('debe de mostrar los componentes de PokemonPicture y PokemonOptions', () => {
      
        const wrapper = shallowMount( PokemonPage, {
            data() {
                return {
                    pokemonArr: pokemons,
                    pokemon: pokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                }
            }
        })

        const pokemonPicture = wrapper.find('pokemon-picture-stub')
        const pokemonOptions = wrapper.find('pokemon-options-stub')

        expect( pokemonPicture.exists() ).toBe(true)
        expect( pokemonOptions.exists() ).toBe(true)

        expect( Number(pokemonPicture.attributes('pokemonid')) ).toBe(1)
        expect( pokemonOptions.attributes('pokemons') ).toBeTruthy()
    })

    test('checkAnswer', async() => {
      
        const wrapper = shallowMount( PokemonPage, {
            data() {
                return {
                    pokemonArr: pokemons,
                    pokemon: pokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                }
            }
        })

        await wrapper.vm.checkAnswer(1)


    })

})