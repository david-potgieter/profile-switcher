import { v4 as uuidv4 } from 'uuid'
import { App, Permission, Role, User } from './types'

const usersData: User[] = [
  { id: uuidv4(), name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { id: uuidv4(), name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
]

const rolesData: Role[] = [
  { id: uuidv4(), name: 'Admin' },
  { id: uuidv4(), name: 'User' },
]

const permissionsData: Permission[] = [
  { id: uuidv4(), name: 'Read' },
  { id: uuidv4(), name: 'Write' },
  { id: uuidv4(), name: 'Delete' },
]

const appsData: App[] = [
  { id: uuidv4(), name: 'Dashboard' },
  { id: uuidv4(), name: 'Analytics' },
]

export { usersData, rolesData, permissionsData, appsData }
