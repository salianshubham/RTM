import './centerTable.css';
const centerTable = () => {
    return (<div className='centerTable_parent'>
        <div className='Centers_add_center_button_div'>
            <h3>Centers</h3>
            <input class="search_centers" type="text" placeholder="Search Centers" />
            <button class="add_center_button">Add Centers</button>
        </div>
        
        <div className='centerTable_content'>
            <table>
                <thead>
                    <tr>
                        <th>SI.NO</th>
                        <th>Centers Name</th>
                        <th>Place</th>
                        <th>Total Base Stations</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            01
                        </td>
                        <td>
                            Meghalaya
                        </td>
                        <td>
                            Meghalaya
                        </td>
                        <td>
                            8
                        </td>
                        <td>
                            <button className='Details_button'>Details</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            02
                        </td>
                        <td>
                            Shilpa Medicare
                        </td>
                        <td>
                            Mysore
                        </td>
                        <td>
                            5
                        </td>
                        <td>
                            <button className='Details_button'>Details</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            06
                        </td>
                        <td>
                            ThamilNadu
                        </td>
                        <td>
                            Chennai
                        </td>
                        <td>
                            7
                        </td>
                        <td>
                            <button className='Details_button'>Details</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            08
                        </td>
                        <td>
                            Assam
                        </td>
                        <td>
                            Dispur  
                        </td>
                        <td>
                            6
                        </td>
                        <td>
                            <button className='Details_button'>Details</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            09
                        </td>
                        <td>
                            Nagaland
                        </td>
                        <td>
                            Kohima
                        </td>
                        <td>
                            2
                        </td>
                        <td>
                            <button className='Details_button'>Details</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            10
                        </td>
                        <td>
                            Tripura
                        </td>
                        <td>
                            Agartala
                        </td>
                        <td>
                            8
                        </td>
                        <td>
                            <button className='Details_button'>Details</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            11
                        </td>
                        <td>
                            West Bengal
                        </td>
                        <td>
                            Kolkata
                        </td>
                        <td>
                            3
                        </td>
                        <td>
                            <button className='Details_button'>Details</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            12
                        </td>
                        <td>
                            Goa
                        </td>
                        <td>
                            Panaji
                        </td>
                        <td>
                            4
                        </td>
                        <td>
                            <button className='Details_button'>Details</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            13
                        </td>
                        <td>
                            Bihar
                        </td>
                        <td>
                            Patna	
                        </td>
                        <td>
                            3
                        </td>
                        <td>
                            <button className='Details_button'>Details</button>
                        </td>
                    </tr>  
                </tbody>
            </table>
        </div>

    </div>);
};

export default centerTable;