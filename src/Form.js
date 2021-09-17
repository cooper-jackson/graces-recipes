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
                <label>Recipe Name</label>
                <input 
                    type="text"
                    name="recipe"
                    onChange={onChange}
                />
            </div>
            <div>
                <div className="input-container">
                    <div className="time-container">
                        <label>Prep Time</label>
                        <input 
                            type="text"
                            name="prep-time"
                            onChange={onChange}
                            id="prep-time"
                        />
                    </div>
                    <div className="time-container">
                        <label>Cook Time</label>
                        <input 
                            type="text"
                            name="cook-time"
                            onChange={onChange}
                            id="cook-time"
                        />
                    </div>
                    <div className="time-container">
                        <label>Serves</label>
                        <input 
                            type="text"
                            name="serves-number"
                            onChange={onChange}
                            id="serves-number"
                        />
                    </div>
                </div>
            </div>
            <div>
                <label>Add Ingredient</label>
                <div className="input-container">
                    <div className="input-div" id="units-selection">
                        <label>Amount</label>
                        <input 
                            type="text"
                            name="ingredient-unit-amount"
                            onChange={onChange}
                            id="ingredient-unit-amount-input"
                        />
                    </div>
                    <div className="input-div">
                        <label>Unit</label>
                        <select name="ingredient-unit" onChange={onChange}>
                            <option value="teaspoon">Teaspoon</option>
                            <option value="tablespoon">Tablespoon</option>
                            <option value="fluid ounce">Fluid Ounce</option>
                            <option value="cup">Cup</option>
                            <option value="pint">Pint</option>
                            <option value="quart">Quart</option>
                            <option value="gallon">Gallon</option>
                        </select>
                    </div>
                    <div className="input-div">
                        <label>Ingredient</label>
                        <input 
                            type="text"
                            name="ingredient"
                            onChange={onChange}
                        />
                    </div>
                    <div className="input-div">
                        <label>&nbsp;</label>
                        <button onClick={addIngredient} style={{display: 'inline-block'}}>+</button>
                    </div>
                </div>

            </div>
            <section>

            </section>
            <div>
                <label>Add Instruction</label>
                <div className="input-container">
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