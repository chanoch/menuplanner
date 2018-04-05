export const USE_RECIPE = 'USE_RECIPE'

export function useRecipe(key) {
    return {
        type: USE_RECIPE,
        key
    }
}
