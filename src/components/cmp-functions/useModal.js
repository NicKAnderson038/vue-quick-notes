import { ref } from '@vue/composition-api'
import { useRouter } from '@/hooks/router'

const useModalForm = () => {
  const localState = ref({
    model: {
      title: '',
      content: '',
    },
    formError: null,
  })

  return {
    form: localState.value,
  }
}

function useModalActions({ form, emit }) {
  const router = useRouter()

  const onModalClose = function() {
    router.push({ name: 'Home' })
  }

  const onModalSave = function() {
    const hasValues = Object.values(form.model).every(model => !!model)

    if (hasValues) {
      form.formError = null
      emit('submit', form.model)
      onModalClose()
    } else {
      form.formError = "Fields shouldn't be empty"
    }
  }

  return {
    onModalClose,
    onModalSave,
  }
}

export { useModalForm, useModalActions }
