import React, { Component } from 'react'
import { TodoList } from '../todoList/TodoList'
import { Notifications } from './Notifications'

export default class Dashboard extends Component {
	render() {
		return (
			<div className="todo-item container">
				<div className="row">
					<div className="col s12 m6">
						<TodoList />
					</div>
					<div className="col s12 m5 offset-m1">
						<Notifications />
					</div>
				</div>
			</div>
		)
	}
}
