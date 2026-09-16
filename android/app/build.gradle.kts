plugins {
    id("com.android.application")
}

val startUrl = providers.gradleProperty("JARVIS_START_URL")
    .orElse("https://vamshi-vfx.github.io/jarvis-mobile-edition/frontend/")

android {
    namespace = "com.growthos.jarvis"
    compileSdk = 35

    defaultConfig {
        applicationId = "com.growthos.jarvis"
        minSdk = 26
        targetSdk = 35
        versionCode = 5
        versionName = "0.5.0"
        buildConfigField("String", "JARVIS_START_URL", "\"${startUrl.get().replace("\\", "\\\\").replace("\"", "\\\"")}\"")
    }

    buildTypes {
        release {
            isMinifyEnabled = false
            proguardFiles(
                getDefaultProguardFile("proguard-android-optimize.txt"),
                "proguard-rules.pro"
            )
        }
    }

    buildFeatures { buildConfig = true }
    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
    }
}
