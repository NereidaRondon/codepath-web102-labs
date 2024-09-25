import Event from './Event'

const Calendar = () => {
  
  return (
    <div className="Calendar">
      <table>
        <thead>

          <tr>
            <th> </th>
            <th>Sunday</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="time">8 AM</th>
            <Event 
              event='Starbucks ☕️' 
              color ='green' 
              address= '646 Maple st'/>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
             <Event event='Yolk 🍳' color ='green'/>
            <td></td>
          </tr>
          <tr>
            <th className="time">9 AM</th>
            <td></td>
            <td></td>
            <td></td>
             <Event event='Subway 🚊' color ='pink'/>
            <td></td>
            <td></td>
            <Event event='The Bean 🫘' color ='blue'/>
          </tr>
          <tr>
            <th className="time">10 AM</th>
            <td></td>
            <Event event='River Cruise ⛵' color ='blue'/>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th className="time">11 AM</th>
            <td></td>
            <td></td>
            <td></td>
            <Event event='Deep Dish 🍕' color ='green'/>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th className="time">12 PM</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <Event event='Subway 🚆' color ='pink'/>
            <td></td>
          </tr>
          <tr>
            <th className="time">1 PM</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th className="time">2 PM</th>
            <td></td>
            <td></td>
            <Event event='Art Institute 🖌️' color ='blue'/>
            <td></td>
             <Event event='Girl & the Goat' color ='green'/>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th className="time">3 PM</th>
            <Event event='Cubs Game ⚾' color ='blue'/>
            <td></td>
            <td></td>
            <td></td>
            <Event event='Subway 🚆' color ='pink'/>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th className="time">4 PM</th>
            <td></td>
            <td></td>
            <Event event='Fancy Dinner 🎩' color ='green'/>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th className="time">5 PM</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <Event event='Shopping 🛍️' color ='blue'/>
            <td></td>
          </tr>

        </tbody>    
      </table>
    </div>
  )
}

export default Calendar;
