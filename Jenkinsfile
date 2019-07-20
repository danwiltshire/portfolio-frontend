pipeline {
  agent any
  stages {
    stage('Install Packages') {
      steps {
        sh 'yarn install'
      }
    }
    stage('Create Build Artifacts') {
      steps {
        sh '/usr/bin/yarn build'
      }
    }
    stage('Staging') {
      when {
        branch 'staging'
      }
      steps {
        withAWS(region: 'eu-west-2	', credentials: '439ef7ba-c484-40ff-8d12-207e3a77909b') {
          s3Delete(bucket: 'dev.danielwiltshire.co.uk', path: '**/*')
          s3Upload(bucket: 'dev.danielwiltshire.co.uk', workingDir: 'build', includePathPattern: '**/*')
        }

      }
    }
  }
}