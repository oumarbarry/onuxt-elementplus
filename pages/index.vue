<script setup>
import fr from 'element-plus/dist/locale/fr'
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center gap-y-3">
    <div>
      <el-button type="primary" class="w-20">
        Primary
      </el-button>
      <el-button type="success" class="w-20">
        Success
      </el-button>
      <el-button type="info" class="w-20">
        Info
      </el-button>
      <el-button type="warning" class="w-20">
        Warning
      </el-button>
      <el-button type="danger" class="w-20">
        Danger
      </el-button>
    </div>

    <div>
      <el-button type="primary" :icon="ElIconEdit" circle />

      <el-button-group class="ml-4">
        <el-button type="primary" :icon="ElIconEdit" />
        <el-button type="primary" :icon="ElIconShare" />
        <el-button type="primary" :icon="ElIconDelete" />
      </el-button-group>
    </div>

    <div>
      <el-button type="primary" round>
        Upload
        <el-icon class="el-icon--right">
          <ElIconUpload />
        </el-icon>
      </el-button>

      <el-button type="primary">
        Upload<el-icon class="el-icon--right">
          <Icon name="ep:upload" />
        </el-icon>
      </el-button>
    </div>

    <el-button color="#626aef" :dark="true" plain>
      Custom Color
    </el-button>

    <el-config-provider :locale="fr" size="large">
      <el-table :data="[]" class="mb-1" />
      <el-pagination :total="100" />
    </el-config-provider>
  </div>
</template>
