---
title: 'Retained Keys'
date: '2021-12-29 22:22:22'
path: '/retained-key/'
previewImg: ''
tags:
  - ddl
  - macros
  - data-modelling
---

A Retained Key is an integer used to represent a particular business key in a database table. It is useful in the following scenarios:

1. Optimising for speed of joins
2. Enabling business keys with null values
3. Handling composite keys with a large number of columns
4. Integrating with systems which require a short, numeric identifier

A Retained Key will "retain" its value even if the record (non PK column) is changed. It can be likened to a hash key - which is a checksum, with separator, of the key values.  If the source record is deleted, the retained key may also be deleted, or it can be "closed out" with a delete flag or an SCD 2 high date.

Hash keys have the advantage that they can be generated without joining back to the base table - so, faster load times. The disadvantage of hash keys is that they take more space - 32 bytes minimum, typically, vs 8 bytes for a numeric.

A Retained Key differs from a Surrogate Key in that a surrogate key is not linked to the business key of the table - somewhat like a UUID (Universally Unique IDentifier).

SAS ETL Developers will be familiar with the capabilities of DI Studio for managing retained keys

The [SASjs/core](https://github.com/sasjs/core) library has a macro to assist SAS Programmers and Application Developers with the same. Features include:

* Table Lock Management (mp_lockanytable)
* Metadata Storage (max retained key)
* Uniqueness check (optional)

The documentation for the macro is here: https://core.sasjs.io/mp__retainedkey_8sas.html

This is the same macro used for updating tables with Retained Keys in [Data Controller for SAS®](https://datacontroller.io). If you would like to empower your users to update mapping tables in your DDS or SAS-Hosted Data Store, with full quality control and audit trail, via a secure web interface - contact the [SAS Apps](https://sasapps.io/contact-us) team!