import apiClient from 'api'
import { useQuery } from '@tanstack/react-query'

function usePokemon() {
  return useQuery([], () => apiClient.listPokemons(0, 1154))
}

function usePokemonById({ id }) {
  return useQuery(
    [`pokemon-${id}`, { id }],
    () => apiClient.getPokemonById(id),
    { enabled: !!id }
  )
}

export { usePokemon, usePokemonById }
