import { Draggable } from 'react-beautiful-dnd'
import trash from '../../assets/icons/fi_trash-2.svg'
import { FC } from 'react'
import { IApliccant } from '../../interfaces/IItemApliccants'
import Swal from 'sweetalert2'

interface ICardContainerProps {
  item: IApliccant
  index: number
  containerId: string

  handleDeleteApliccant: (containerId: string, item: IApliccant) => void
}

export const CardContainer: FC<ICardContainerProps> = ({
  item,
  index,
  containerId,
  handleDeleteApliccant,
}) => {
  const handleDeleteApliccantConfirm = (containerId: string, item: IApliccant) => {
    Swal.fire({
      title: 'Esta seguro de eliminar esta tarjeta?',
      icon: 'error',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
      cancelButtonText: 'No',
    }).then(result => {
      if (result.isConfirmed) {
        handleDeleteApliccant(containerId, item)

        Swal.fire('Eliminado!', 'Postulante eliminado correctamente', 'success')
      }
    })
  }

  return (
    <Draggable key={item.id} draggableId={item.id} index={index}>
      {draggableProvided => (
        <div
          {...draggableProvided.draggableProps}
          ref={draggableProvided.innerRef}
          {...draggableProvided.dragHandleProps}
        >
          <div
            style={{
              border: '1px solid  #473E83',
              background: 'white',
              borderRadius: '12px',
              margin: '10px 0',
              padding: '16px 12px',
              width: '270px',
              height: '150px',
            }}
          >
            <div className="flex justify-between">
              <div>{item.createdAt}</div>
              <img
                src={trash}
                style={{ cursor: 'pointer', width: '32px' }}
                onClick={() => {
                  handleDeleteApliccantConfirm(containerId, item)
                }}
              ></img>
            </div>
            <div className="flex content-between">
              <img className="rounded-full h-10 w-10 " src={item.avatar}></img>
              <div>
                <div className="font-bold">{item.fullName}</div>
                <div>{item.rol}</div>
                <div style={{ background: '#473E83', borderRadius: '12px' }} className="text-white">
                  <p className="text-center"> {item.experience}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  )
}
