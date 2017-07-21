import React from 'react'
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';

const DomainDropdown = (props) => {
	let domainFilter = props.domainFilter
	let domains = props.domains
	let changeHandler = props.changeHandler

	return (
		<DropDownMenu
			style={{marginRight: '10px', backgroundColor: '#ff3636', minWidth: "250px"}}
			labelStyle={{color: 'white'}}
			value={domainFilter}
			onChange={changeHandler}
			>
			<MenuItem
				style={{backgroundColor: '#ff3636', color: '#ffffff', minWidth: "250px"}}
				value={"all"}
				primaryText={"All Categories"}
				/>
				{domains.map((domain, index) =>
					{
						return (
							<MenuItem
								style={{backgroundColor: '#ff3636', color: '#ffffff', minWidth: "250px"}}
								value={domain.name}
								primaryText={domain.name}
								/>
						);
					}
				)}
		</DropDownMenu>
	)

}

export default DomainDropdown
