pipeline {
    agent any
   nodejs(cacheLocationStrategy: workspace()) {
       // some block
   }
    stages {

        stage('Build') {
            steps {
            echo  'Building ..'
            npm 'run build'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
