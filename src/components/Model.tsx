import {
  cloneElement,
  createContext,
  useContext,
  useState,
  type ReactNode,
  type ReactElement,
  type Dispatch,
  type SetStateAction,
} from "react"
import { createPortal } from "react-dom"
import { HiXMark } from "react-icons/hi2"
import { useOutsideClick } from "../hooks/useOutsideClick"

// --- Types ---

interface ModalContextValue {
  openName: string
  close: () => void
  open: Dispatch<SetStateAction<string>>
}

interface ModalProps {
  children: ReactNode
}

interface OpenProps {
  children: ReactElement
  opens: string
}

interface WindowProps {
  children: ReactElement
  name: string
}

// --- Context ---

const ModalContext = createContext<ModalContextValue | undefined>(undefined)

function Modal({ children }: ModalProps) {
  const [openName, setOpenName] = useState<string>("")

  const close = () => setOpenName("")
  const open = setOpenName

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  )
}

// --- Sub-components ---

// 1. Update the Open component
function Open({ children, opens: opensWindowName }: OpenProps) {
  const context = useContext(ModalContext)
  if (!context) throw new Error("Modal.Open must be used within a Modal")

  const { open } = context

  // Use type assertion here to tell TS that children accepts an onClick
  return cloneElement(children as ReactElement<{ onClick: () => void }>, {
    onClick: () => open(opensWindowName),
  })
}

// 2. Update the Window component
function Window({ children, name }: WindowProps) {
  const context = useContext(ModalContext)
  if (!context) throw new Error("Modal.Window must be used within a Modal")

  const { openName, close } = context
  const ref = useOutsideClick<HTMLDivElement>(close)

  if (name !== openName) return null

  return createPortal(
    <div className="fixed inset-0 z-[1000] h-screen w-full bg-[var(--backdrop-color)] backdrop-blur-sm transition-all duration-500">
      <div
        ref={ref}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-[var(--color-grey-0)] p-8 shadow-lg transition-all duration-500"
      >
        <button
          onClick={close}
          className="absolute top-3 right-5 translate-x-3 rounded-sm p-1 transition-all duration-200 hover:bg-[var(--color-grey-100)]"
        >
          <HiXMark className="h-6 w-6 text-[var(--color-grey-500)]" />
        </button>

        <div>
          {/* Use type assertion here to tell TS children accepts onCloseModal */}
          {cloneElement(
            children as ReactElement<{ onCloseModal: () => void }>,
            {
              onCloseModal: close,
            }
          )}
        </div>
      </div>
    </div>,
    document.body
  )
}

// Attach compound components
Modal.Open = Open
Modal.Window = Window

export default Modal
