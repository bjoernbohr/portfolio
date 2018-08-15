---
title: A Page with an Example Form
form:
    name: contact-form
    fields:
        - name: name
          label: Ich Bin
          placeholder:
          autofocus: on
          autocomplete: on
          type: text
          validate:
            required: true

        - name: email
          label: Meine Mail
          placeholder:
          type: email
          validate:
            required: true

        - name: textarea
          label: Ich möchte sagen
          placeholder:
          type: textarea
          validate:
            required: true


    buttons:
        - type: submit
          value: Submit

    process:
        - email:
            from: "{{ config.plugins.email.from }}"
            to:
              - "{{ config.plugins.email.from }}"
              - "{{ form.value.email }}"
            subject: "[Feedback] {{ form.value.name|e }}"
            body: "{% include 'forms/data.html.twig' %}"
        - save:
            fileprefix: feedback-
            dateformat: Ymd-His-u
            extension: txt
            body: "{% include 'forms/data.txt.twig' %}"
        - message: Thank you for your feedback!
        - display: thankyou

---

