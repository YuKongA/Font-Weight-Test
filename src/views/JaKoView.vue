<script setup>
import ContentSection from '../components/ContentSection.vue';
import { weights } from '../data/fonts';
const languages = [
  { label: '日文', text: 'これは例です' },
  { label: '韩文', text: '이것은例입니다' },
];
</script>

<template>
  <ContentSection id="language-weights" number="01" title="日韩字重对照">
    <div class="language-tests">
      <article v-for="language in languages" :key="language.label" class="language-test">
        <div class="language-test-heading">
          <h3>{{ language.label }}</h3><span>sans-serif</span>
        </div>
        <table class="language-weight-table">
          <colgroup>
            <col class="language-weight-column">
            <col>
          </colgroup>
          <thead class="sr-only">
            <tr>
              <th scope="col">字重</th>
              <th scope="col">样本</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="weight in weights" :key="weight" :class="{ 'standard-weight': weight === 400 }">
              <th scope="row">{{ weight }}</th>
              <td lang="en" :style="{ fontWeight: weight }">
                <div class="language-samples">
                  <span class="language-upright" title="正体">{{ language.text }}</span>
                  <span class="language-italic" title="斜体">{{ language.text }}</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </article>
    </div>
  </ContentSection>
</template>
