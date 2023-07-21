import React from 'react';

interface PropsInputRadio {
  options: OptionsObject;
  state: OptionsObject;
  setState: React.Dispatch<React.SetStateAction<OptionsObject>>;
  name: string;
}

/**
* @param options deve ser um objeto, que cada chave é uma string, que pode ou não ter um valor (imagem) definido.
* @returns um input do tipo 'radio' e um span com o valor da opção, caso esse valor seja fornecido no objeto. O valor armazenado no estado será um objeto com a chave(opção) e valor(iamgem).
*/
function InputRadio({
  options, state, setState, name, ...props
}:PropsInputRadio) {

  function handleChecked(option:string) {
    if(state && Object.keys(state).includes(option)) {
      return true;
    } else {
      return false
    }
  }

  return (
    <div className="flex flex-wrap items-center justify-center gap-5">
      {options && Object.keys(options).map(option => 
        <div key={option}>
          <input
            className="peer"
            id={`${name + option}`}
            value={option}
            checked={handleChecked(option)}
            onChange={({target}) => setState({[target.value]: options[target.value]})}
            type="radio"
            {...props}
          />
          <label htmlFor={`${name + option}`}
            className="opacity-40 hover:opacity-100 peer-checked:opacity-100 cursor-pointer duration-300"
          >
            <img src={options[option]}/>
          </label>
        </div>
      )}
    </div>
  )
}

export default InputRadio;