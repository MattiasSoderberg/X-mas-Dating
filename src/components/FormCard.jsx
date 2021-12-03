import React from 'react'
import "./FormCard.css"

export default function FormCard({ setSex }) {
    return (
        <div className="FormCard">
            <form>
                <label htmlFor="select">Välj kön</label>
                <select onChange={(e) => setSex(e.target.value)}>
                    <option value="" disabled>Välj kön</option>
                    <option value="woman">Kvinna</option>
                    <option value="man">Man</option>
                    <option value="pet">Husdjur</option>
                </select>
            </form>
        </div>
    )
}
