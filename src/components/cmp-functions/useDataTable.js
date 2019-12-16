import { reactive, computed, watch } from '@vue/composition-api'
import orderBy from 'lodash/orderBy'

function useSorting({ props, emit }) {
  const localState = reactive({
    itemsSorted: computed(() =>
      orderBy(
        props.items,
        localState.sort,
        localState.sortDirection ? 'asc' : 'desc'
      )
    ),
    sort: 'id',
    sortDirection: true,
  })

  const onSort = function(key) {
    if (localState.sort === key) {
      localState.sortDirection = !localState.sortDirection
    } else {
      localState.sortDirection = true
    }

    localState.sort = key

    emit('sort', key)
  }

  return {
    sortingState: localState,
    onSort,
  }
}

function useSelecting({ sortingState, props, emit }) {
  const localState = reactive({
    selectionModel: [],
    isSelectAll: computed(
      () =>
        sortingState.itemsSorted.length > 0 &&
        localState.selectionModel.length === sortingState.itemsSorted.length
    ),
  })

  watch(
    () => localState.selectionModel,
    selectionModel => {
      emit('update:selected', [...selectionModel])
    }
  )

  const onActionSelectAll = function() {
    localState.isSelectAll
      ? (localState.selectionModel = [])
      : (localState.selectionModel = sortingState.itemsSorted.map(
          item => item[props.selectable]
        ))
  }

  const onActionDeselectAll = function() {
    localState.selectionModel = []
  }

  return {
    selectingState: localState,
    onActionSelectAll,
    onActionDeselectAll,
  }
}

export { useSorting, useSelecting }
