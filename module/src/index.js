const Noodl = require('@noodl/noodl-sdk');

function TableComponent(props) {
	let style = {
		position: "relative",
		borderSpacing: props.borderSpacing,
		borderCollapse: props.borderCollapse ? "collapse":false,
	}
	return <table className={props.classNames} style={style} onClick={props.onClick}>{props.children}</table>
}

const TableNode = Noodl.defineReactNode({
	name: 'Table',
	category: 'Table',
	getReactComponent() {
		return TableComponent;
	},
	inputProps: {
		className: {type: 'string', default: 'table', displayName: 'Class name', group: 'Config'},
		borderSpacing:{type: 'string', default: '0.2rem', displayName: 'Border spacing', group: 'Style'},
		borderCollapse:{type: 'boolean', default: false, displayName: 'Border collapse', group: 'Style'},
	},
	outputProps: {
		onClick: {type: 'signal', displayName: 'Click'}
	}
})

function TableHeadComponent(props) {
	let style = {position: "relative"}
	return <thead className={props.classNames} style={style} onClick={props.onClick}>{props.children}</thead>
}

const TableHeadNode = Noodl.defineReactNode({
	name: 'Table Head',
	category: 'Table',
	getReactComponent() {
		return TableHeadComponent;
	},
	inputProps: {
		className: {type: 'string', default: 'table-head', displayName: 'Class name', group: 'Config'}
	},
	outputProps: {
		onClick: {type: 'signal', displayName: 'Click'}
	}
})

function TableBodyComponent(props) {
	let style = {position: "relative"}
	return <tbody className={props.classNames} style={style} onClick={props.onClick}>{props.children}</tbody>
}

const TableBodyNode = Noodl.defineReactNode({
	name: 'Table Body',
	category: 'Table',
	getReactComponent() {
		return TableBodyComponent;
	},
	inputProps: {
		className: {type: 'string', default: 'table-body', displayName: 'Class name', group: 'Config'}
	},
	outputProps: {
		onClick: {type: 'signal', displayName: 'Click'}
	}
})

function TableRowComponent(props) {
	let style = {position: "relative"}
	return <tr className={props.classNames} style={style} onClick={props.onClick}>{props.children}</tr>
}

const TableRowNode = Noodl.defineReactNode({
	name: 'Table Row',
	category: 'Table',
	getReactComponent() {
		return TableRowComponent;
	},
	inputProps: {
		className: {type: 'string', default: 'table-row', displayName: 'Class name', group: 'Config'}
	},
	outputProps: {
		onClick: {type: 'signal', displayName: 'Click'}
	}
})


function TableCellComponent(props) {
	let style = {
		position: "relative"
	}

	let el = <td className={props.classNames} style={style} onClick={props.onClick}>{props.children}</td>;

	if(props.cellType === "th"){
		el = <th className={props.classNames} style={style} onClick={props.onClick}>{props.children}</th>;
	}

	return el
}


const TableCellNode = Noodl.defineReactNode({
	name: 'Table Cell',
	category: 'Table',
	getReactComponent() {
		return TableCellComponent;
	},
	inputProps: {
		cellType: {
            group: 'Element',
            displayName: 'Cell type',
            type: {
                name: 'enum',
                enums: [{label: 'Data', value: 'td'}, {label: 'Header', value: 'th'}]
			},
			default: 'td'
        },
		className: {type: 'string', default: 'table-header-cell', displayName: 'Class name', group: 'Config'}
	},
	outputProps: {
		onClick: {type: 'signal', displayName: 'Click'}
	}
})


Noodl.defineModule({
    reactNodes: [
		TableNode,
		TableHeadNode,
		TableBodyNode,
		TableRowNode,
		TableCellNode
    ],
    nodes:[
    ],
    setup() {
		console.log("%cnoodl-table-module loaded", 'color: #00FF00')
    }
});