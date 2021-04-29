import React, { useState } from 'react'
import './Form.css'

export default function Form (props) {

    const { textValue, setTextValue, formValues, setFormValues } = props
    const [ingredients, setIngredients] = useState([])

    const onChange = event => {
        const {name, value} = event.target
        setFormValues({...formValues, [name]: value})
    }

    const addIngredient = event => {
        event.preventDefault()
        console.log(formValues)
    }

    const addInstruction = event => {
        event.preventDefault()
        console.log(formValues.instruction)
    }

    return (
        <form>
            <div>
                <label>Recipe Name: </label>
                <input 
                    type="text"
                    name="recipe"
                    onChange={onChange}
                />
            </div>
            <div>
                <label>Ingredients: </label>
                <div className="input-button-container">
                    <input 
                        type="text"
                        name="ingredient-unit-amount"
                        onChange={onChange}
                        id="units-selection"
                    />
                    <select name="ingredient-unit" onChange={onChange}>
                        <option value="teaspoon">Teaspoon</option>
                        <option value="tablespoon">Tablespoon</option>
                        <option value="fluid ounce">Fluid Ounce</option>
                        <option value="cup">Cup</option>
                        <option value="pint">Pint</option>
                        <option value="quart">Quart</option>
                        <option value="gallon">Gallon</option>
                    </select>
                    <input 
                        type="text"
                        name="ingredient"
                        onChange={onChange}
                    />
                    <button onClick={addIngredient} style={{display: 'inline-block'}}>+</button>
                </div>

            </div>
            <section>

            </section>
            <div>
                <label>Instructions: </label>
                <div className="input-button-container">
                    <input 
                        type="text"
                        name="instruction"
                        onChange={onChange}
                    />
                    <button onClick={addInstruction} style={{display: 'inline-block'}}>+</button>
                </div>
            </div>
        </form>
    )
}