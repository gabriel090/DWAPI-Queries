select d.openmrs_id                                                              PatientPK,
       i.siteCode                                                                SiteCode,
       d.unique_patient_no                                                       PatientID,
       'KenyaEMR'                                                                Emr,
       'Kenya HMIS II'                                                           Project,
       i.facilityName                                                            FacilityName,
       f.visit_id                                                                VisitId,
       f.visit_date                                                              Covid19AssessmentDate,
       f.encounter_id                                                         as EncounterId,
       (case f.tracing_type
          when 1650 then 'Client Called'
          when 164965 then 'Physical Tracing'
          when 161642 then 'Treatment supporter' end)                         as TracingType,
       (case f.tracing_outcome
          when 1267 then 'Contact'
          when 1118 then 'No contact' end)                                    as TracingOutcome,
       f.attempt_number                                                       as AttemptNumber,
       (case f.is_final_trace when 1267 then 'Yes' when 163339 then 'No' end) as IsFinalTrace,
       (case f.tracing_outcome
          when 165610 then 'COVID19 Positive'
          when 160432 then 'Dead'
          when 1693 then 'Receiving ART from another clinic/Transferred'
          when 160037 then 'Still in care at CCC'
          when 5240 then 'Lost to follow up'
          when 164435 then 'Stopped treatment' end)                           as TrueStatus,
       (case f.cause_of_death
          when 165609 then 'Infection due to COVID-19'
          when 162574 then 'Death related to HIV infection'
          when 116030 then 'Cancer'
          when 164500 then 'TB'
          when 151522 then 'Other infectious and parasitic diseases'
          when 133481 then 'Natural cause'
          when 1603 then 'Unnatural Cause'
          when 5622 then 'Unknown cause' end)                                 as CauseOfDeath,
       f.comments                                                             as Comments,
       date(f.booking_date)                                                   as BookingDate,
       f.date_created                                                         as DateCreated,
       f.date_last_modified                                                   as DateModified
from kenyaemr_etl.etl_patient_demographics d
       join kenyaemr_etl.etl_ccc_defaulter_tracing f on d.patient_id = f.patient_id
       join kenyaemr_etl.etl_default_facility_info i
group by f.visit_id;
