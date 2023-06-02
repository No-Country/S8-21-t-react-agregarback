import { useUser } from '../../context/UserProvider'
import imgupload from '../../assets/icons/upload_img.svg'
import imgIconPerson from '../../assets/icons/icon_person_form_createJob.svg'
import vacaciones from '../../assets/icons/vacaciones_beneficios.svg'
import service from '../../assets/icons/service_beneficios.svg'
import computadora from '../../assets/icons/computer_beneficios.svg'
import horario from '../../assets/icons/clock_beneficios.svg'
import bebidas from '../../assets/icons/tapas_beneficios.svg'
import prepaga from '../../assets/icons/prepaga_beneficios.svg'
import platzi from '../../assets/icons/platzi_beneficios.svg'
import clases from '../../assets/icons/clases_beneficios.svg'
import close from '../../assets/icons/close X.svg'
import { Link } from 'react-router-dom'
import Loader from '../loader/Loader'
import { useState, useRef } from 'react'

const CrearVacanteReclutador = () => {
  const [loading, setLoading] = useState(false)
  const [Image, setImage] = useState('')
  const [inputCheck, setInputCheck] = useState({
    vsc: false,
    php: false,
    eclipse: false,
    figma: false,
    java: false,
    ds: false,
    reactnative: false,
    react: false,
    node: false,
    horario: false,
    ingles: false,
    bebidas: false,
    computadora: false,
    prepaga: false,
    service: false,
    vacaciones: false,
    platzi: false,
    acuerdo: true,
  })
  const [inputValues, setInputValues] = useState({
    imagen: '',
    empresa: '',
    puesto: '',
    experiencia: '',
    modo: '',
    ciudades: '',
    salario: '',
    textarea: '',
    ingles: '',
  })
  const [file, setFile] = useState('')

  const handleSubmit = e => {
    e.preventDefault(), setLoading(true)
    setInputValues
    setInputCheck
  }

  const handleChange = e => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    })
  }

  const handleChangeChecked = e => {
    console.log(e)
    setInputCheck({
      ...inputCheck,
      [e.target.name]: e.target.checked,
    })
  }
  const refInputFile = useRef(null)

  const showImage = file => {
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)
  }

  const selectImage = () => {
    refInputFile.current.click()
  }
  // const addImage = e => {
  //   e.preventDefault()
  //   refInputFile.current.files = e.dataTransfer.files
  //   const file = refInputFile.current.files[0]
  //   showImage(file)
  //   fileReader('load', (e) => {
  //     setImage(
  //       e.target.result)
  //   })
  //   setFile(file)
  // }

  // const uploadImage = e => {
  //   const files = e.target.files
  //   const file = files[0]
  //   showImage(file)
  // }
  // console.log(setInputCheck)
  return (
    <>
      <div>
        {loading ? <Loader /> : null}
        <div id="header_container" className="flex justify-between w-full pt-4 pl-8 flex-cols-2">
          <h1 className="pb-1 pl-6 text-3xl font-bold">Crear nueva oferta de empleo</h1>
          <Link to="/jobs">
            <button className="mr-6 w-14 h-14 bg-secundaryGreyLight2">
              <img src={close} className="w-full h-full p-4"></img>
            </button>
          </Link>
        </div>
        <form
          onSubmit={handleSubmit}
          id="conteiner-form"
          className="flex flex-col items-start justify-start w-full h-full bg-white"
        >
          <div id="conteiner_upload_image" className="flex flex-row w-full cursor-pointer">
            <div
              onClick={selectImage}
              // onDrop={addImage}
              // onDrag={addImage}
              // {dragImage}
              id="conteiner_ imput_img"
              className="flex flex-col items-center justify-center w-32 mb-3 ml-20 text-center bg-red-500 border-2 border-dashed h-18 flex-rows text-xxs border-slate-400 rounded-xl"
            >
              <input
                onChange={handleChange}
                ref={refInputFile}
                type="file"
                id="imagen"
                name="imagen"
                className="hidden h-full border-2 border-dashed w-14 rounded-xl border-slate-400 opacity-20"
              ></input>
              <h3 className="text-xs font-bold bg-transparent w-fulw-full"> subir imagen</h3>
              <img
                src={Image}
                onBlur={showImage}
                className="z-50 w-full h-12 pb-2 bg-center bg-no-repeat bg-cover "
              ></img>
            </div>
            <input
              type="text"
              name="empresa"
              value={inputValues.empresa}
              onChange={handleChange}
              className="w-64 ml-4 border-b-2 border-slate-500"
              placeholder="Ingrese el nombre de su empresa"
            ></input>

            <div className="flex flex-row ml-360">
              <div className="justify-center p-4 pl-8 bg-black w-87 h-14 rounded-xl">
                <img src={imgIconPerson}></img>
              </div>
              <input
                type="text"
                name="puesto"
                value={inputValues.puesto}
                onChange={handleChange}
                placeholder="Perfil buscado:UX/UI"
                className="w-64 pr-2 ml-4 bg-white border-b-2 border-slate-500 h-14"
              ></input>
            </div>
          </div>
          {/* -------inputs superiores(experiencia y modalidad)------------- */}
          <div className="w-full h-full">
            <div id="group-input" className="mb-4">
              <div className="flex flex-col max-w-sm ">
                <label className="pb-2 pr-4 text-xl font-medium ">Experiencia</label>
                <select
                  defaultValue={inputValues.experiencia}
                  onChange={handleChange}
                  name="experiencia"
                  className="items-center px-6 pr-2 text-white w-327 h-14 bg-primaryBlueDark rounded-xl"
                >
                  <option id="" value="">
                    Selecciona nivel de experiencia
                  </option>
                  <option id="traine" value="traine">
                    Trainee
                  </option>
                  <option id="junior" value="junior">
                    Junior
                  </option>
                  <option id="semisenior" value="semisenior">
                    SemiSenior
                  </option>
                  <option id="senior" value="senior">
                    Senior
                  </option>
                </select>
              </div>
              <div className="pl-0">
                <h4 className="pb-2 text-xl font-medium">Modalidad </h4>
                <label className="pl-0 mr-4 text-base font-normal">
                  <input
                    onChange={handleChange}
                    type="radio"
                    id={inputValues.modo}
                    name="modo"
                    value="presencial"
                    className="mr-2"
                  ></input>
                  Presencial
                </label>
                <label className="pl-12 mr-4 text-base font-normal">
                  <input
                    onChange={handleChange}
                    type="radio"
                    value="virtual"
                    name="modo"
                    id={inputValues.modo}
                    className="mr-2"
                  ></input>
                  Virtual
                </label>
                <label className="pl-12 mr-4 text-base font-normal">
                  <input
                    onChange={handleChange}
                    type="radio"
                    id={inputValues.modo}
                    value="hibrido"
                    name="modo"
                    className="mr-2"
                  ></input>
                  Hibrido
                </label>
              </div>
            </div>
            <div id="group-input">
              <div className="flex flex-col mb-3">
                <label className="pb-2 text-xl font-medium">Ubicacion del Empleo</label>
                <select
                  onChange={handleChange}
                  defaultValue={inputValues.ciudades}
                  name="ciudades"
                  className="items-center px-6 pr-2 text-white w-327 h-14 bg-primaryBlueDark rounded-xl"
                >
                  <option id="" value="">
                    Elije ciudad
                  </option>
                  <option id="cordoba" value="cordoba">
                    cordoba
                  </option>
                  <option id="bs as" value="bs as">
                    buenod aires
                  </option>
                  <option id="mendoza" value="mendoza">
                    mendoza
                  </option>
                </select>
              </div>
              <div className="flex flex-col">
                <label className="pb-2 text-xl font-medium">Salario </label>
                <select
                  onChange={handleChange}
                  defaultValue={inputValues.salario}
                  name="salario"
                  className="items-center px-6 pr-2 text-white w-253 h-14 bg-primaryBlueDark rounded-xl"
                  placeholder="Seleciona un rango"
                >
                  <option id="" value="">
                    Seleciona un rango
                  </option>
                  <option id="0" value="0">
                    0-50.000
                  </option>
                  <option id="5" value="5">
                    50.000-100.000
                  </option>
                  <option id="10" value="10">
                    100.000-250.000
                  </option>
                  <option id="25" value="25">
                    250.000-400.000
                  </option>
                  <option id="40" value="40">
                    400.000-600.000
                  </option>
                </select>
              </div>
            </div>
            {/* ----------------------------------------------------------------------------- */}

            <div id="group-input">
              <div className="flex flex-col mb-3 ">
                <label className="pb-1 text-xl font-medium">Breve descripcion del puesto</label>
                <p className="pl-2 mb-4 text-xs font-normal w-80 h-7">
                  ¿De qué tareas será responsable el/la postulante? ¿A qué desafíos diarios se
                  enfrentará?
                </p>
                <textarea
                  onChange={handleChange}
                  name="textarea"
                  value={inputValues.textarea}
                  className="h-56 pt-2 pl-3 border-2 resize-none w-325 border-secondary rounded-xl"
                  placeholder="Las tareas que tendras que realizar a diario..."
                ></textarea>
              </div>
              <div className="flex flex-col h-56 mb-20 ">
                <div className="flex flex-col pb-6">
                  <h4 className="pb-2 text-xl font-medium">Requerimientos del puesto </h4>
                  <p className="pb-3 pr-48 text-base font-normal">
                    ¿Qué perfil técnico y herramientas debería manejar el/la postulante? ¿Cuáles son
                    las skills para este puesto?
                  </p>
                  <div className="grid grid-cols-3 pt-2">
                    <label>
                      <input
                        onChange={handleChangeChecked}
                        type="checkbox"
                        id="vsc"
                        name="vsc"
                        defaultChecked={inputCheck.vsc}
                        className="mr-3"
                      ></input>
                      Visual studio code
                    </label>
                    <label>
                      <input
                        onChange={handleChangeChecked}
                        type="checkbox"
                        id="php"
                        name="php"
                        defaultChecked={inputCheck.php}
                      ></input>{' '}
                      PHP
                    </label>
                    <label>
                      <input
                        onChange={handleChangeChecked}
                        type="checkbox"
                        id="eclipse"
                        name="eclipse"
                        defaultChecked={inputCheck.eclipse}
                      ></input>{' '}
                      Eclipse
                    </label>
                    <label>
                      <input
                        onChange={handleChangeChecked}
                        type="checkbox"
                        id="figma"
                        name="figma"
                        defaultChecked={inputCheck.figma}
                      ></input>{' '}
                      Figma
                    </label>
                    <label>
                      <input
                        onChange={handleChangeChecked}
                        type="checkbox"
                        id="ds"
                        name="ds"
                        defaultChecked={inputCheck.ds}
                      ></input>{' '}
                      Design Thinking
                    </label>
                    <label>
                      <input
                        onChange={handleChangeChecked}
                        type="checkbox"
                        id="java"
                        name="java"
                        defaultChecked={inputCheck.java}
                      ></input>{' '}
                      Java
                    </label>
                    <label>
                      <input
                        onChange={handleChangeChecked}
                        type="checkbox"
                        id="reactnative"
                        name="reactnative"
                        defaultChecked={inputCheck.reactnative}
                      ></input>{' '}
                      React Native
                    </label>
                    <label>
                      <input
                        onChange={handleChangeChecked}
                        type="checkbox"
                        id="react"
                        name="react"
                        defaultChecked={inputCheck.react}
                      ></input>{' '}
                      React
                    </label>
                    <label>
                      <input
                        onChange={handleChangeChecked}
                        type="checkbox"
                        id="node"
                        name="node"
                        defaultChecked={inputCheck.node}
                      ></input>{' '}
                      Node Js
                    </label>
                  </div>
                </div>
                <div className="flex flex-col">
                  <label className="pb-2 text-xl font-medium">Nivel Ingles </label>
                  <select
                    onChange={handleChange}
                    name="ingles"
                    defaultValue={inputValues.ingles}
                    className="items-center px-6 pr-2 text-white w-253 h-14 bg-primaryBlueDark rounded-xl"
                  >
                    <option id="notiene" value="notiene">
                      No requiere experiencia
                    </option>
                    <option id="ados" value="ados">
                      A2-Principiante
                    </option>
                    <option id="bdos" value="bdos">
                      B2-Intermedio
                    </option>
                    <option id="cuno" value="cuno">
                      C1-Avanzado
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col mt-6">
                <h4 className="pb-6 pl-16 text-xl font-medium">Beneficios</h4>
                <div className="grid grid-cols-3 gap-y-3">
                  <div className="grid h-4 grid-rows-1 ml-4">
                    <img src={horario} className="ml-10"></img>
                    <label className="w-48 pl-6 ml-5">
                      <input
                        onChange={handleChangeChecked}
                        type="checkbox"
                        id="horario"
                        name="horarios"
                        defaultChecked={inputCheck.horario}
                        className="ml-6 mr-2 text-base font-normal"
                      ></input>{' '}
                      Horario flexible
                    </label>
                  </div>
                  <div className="grid h-6 grid-rows-1">
                    <img src={clases} className="ml-36 "></img>
                    <label className="w-48 ml-36">
                      <input
                        onChange={handleChangeChecked}
                        type="checkbox"
                        id="ingles"
                        name="ingles"
                        defaultChecked={inputCheck.ingles}
                        className="ml-6 mr-2 text-base font-normal"
                      ></input>{' '}
                      Clases de Ingles
                    </label>
                  </div>
                  <div className="grid h-6 grid-rows-1">
                    <img src={bebidas} className="ml-48 "></img>
                    <label className="w-48 pl-1 ml-48">
                      <input
                        onChange={handleChangeChecked}
                        type="checkbox"
                        id="bebidas"
                        name="bebidas"
                        defaultChecked={inputCheck.bebidas}
                        className="ml-5 mr-2 text-base font-normal"
                      ></input>{' '}
                      Bebidas y Snack
                    </label>
                  </div>
                  <div className="grid h-6 grid-rows-1 ml-4">
                    <img src={computadora} className="ml-10"></img>
                    <label className="w-48 pl-1 ml-10">
                      <input
                        onChange={handleChangeChecked}
                        type="checkbox"
                        id="computadora"
                        name="computadora"
                        defaultChecked={inputCheck.computadora}
                        className="ml-6 mr-2 text-base font-normal"
                      ></input>{' '}
                      Computadora
                    </label>
                  </div>
                  <div className="grid h-6 grid-rows-1">
                    <img src={prepaga} className="ml-36"></img>
                    <label className="w-48 pr-1 ml-36">
                      <input
                        onChange={handleChangeChecked}
                        type="checkbox"
                        id="prepaga"
                        name="prepaga"
                        defaultChecked={inputCheck.prepaga}
                        className="ml-6 mr-2 text-base font-normal"
                      ></input>{' '}
                      Cobertura Prepaga
                    </label>
                  </div>
                  <div className="grid h-6 grid-rows-1">
                    <img src={service} className="ml-48"></img>
                    <label className="pr-1 ml-48 ">
                      <input
                        onChange={handleChangeChecked}
                        type="checkbox"
                        id="service"
                        name="service"
                        defaultChecked={inputCheck.service}
                        className="ml-6 mr-2 text-base font-normal"
                      ></input>{' '}
                      Servicio Tecnico para PC
                    </label>
                  </div>
                  <div className="grid h-6 grid-rows-1 ml-4">
                    <img src={vacaciones} className="ml-10"></img>
                    <label className="w-48 pl-1 ml-10 ">
                      <input
                        onChange={handleChangeChecked}
                        type="checkbox"
                        id="vacaciones"
                        name="vacaciones"
                        defaultChecked={inputCheck.vacaciones}
                        className="ml-6 mr-2 text-base font-normal"
                      ></input>
                      Vacaciones Extras
                    </label>
                  </div>
                  <div className="grid h-6 grid-rows-1 ">
                    <img src={platzi} className="ml-36"></img>

                    <label className="pr-1 ml-36 w-72">
                      <input
                        onChange={handleChangeChecked}
                        type="checkbox"
                        id="platzi"
                        name="platzi"
                        defaultChecked={inputCheck.platzi}
                        className="ml-6 mr-2 text-base font-normal"
                      ></input>
                      Descuentos en Platzi
                    </label>
                  </div>
                </div>
                <div className="h-6 pt-6 pb-0 mb-4 ">
                  <label className="text-xl font-medium ">
                    <input
                      onChange={handleChangeChecked}
                      type="checkbox"
                      id="acuerdo"
                      name="acuerdo"
                      // checked
                      defaultChecked={inputCheck.acuerdo}
                      className="ml-16 mr-2"
                    ></input>
                    He leido y estoy de acuerdo con la politica de Reclutando
                  </label>

                  <p className="text-xs font-normal pl-84">
                    Tu anuncio de empleo será revisado y publicado en nuestro sitio.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-around w-full pt-16 pb-8 pl-12 pr-20 ">
            <Link to="/recruiter/dashboard">
              <button className="w-48 h-12 mb-8 text-base font-medium bg-white border-2 border-skyblue text-skyblue">
                Cancelar
              </button>
            </Link>
            <button
              onClick={() => setLoading(true)}
              className="w-48 h-12 text-base font-medium text-white bg-primaryGreen"
            >
              Publicar Oferta
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default CrearVacanteReclutador
