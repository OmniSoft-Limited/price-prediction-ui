pipeline {
    agent any

    stages {
        stage('test') {
            steps {
                bat "bun install"
                bat 'bun run test'
            }
        }
    }
}