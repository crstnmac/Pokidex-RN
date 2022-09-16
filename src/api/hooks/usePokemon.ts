import apiClient from 'api'
import { useQuery } from '@tanstack/react-query'

function usePokemon() {
  return useQuery([], () => apiClient.listPokemons(0, 1154))
}

function usePokemonById({ id }: { id: number }) {
  return useQuery(
    [`pokemon-${id}`, { id }],
    () => apiClient.getPokemonById(id),
    { enabled: !!id }
  )
}

function usePokemonByName({ name }: { name: string }) {
  return useQuery(
    [`${name}`, { name }],
    () => apiClient.getPokemonByName(name),
    {
      enabled: !!name,
    }
  )
}

export { usePokemon, usePokemonById, usePokemonByName }
